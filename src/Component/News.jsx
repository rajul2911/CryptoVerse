import React from 'react';
import { Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../Services/cryptoNewsApi';

const { Text, Title } = Typography;

function News({ simplified }) {
  const { data: cryptoNews, isLoading, error } = useGetCryptoNewsQuery({
    newsCategory: 'Crypto',
  });

  // Loading & error states
  if (isLoading) return 'Loading...';
  if (error) return 'Error loading news';

  // The new API returns data in cryptoNews.data
  const newsList = cryptoNews?.data || [];

  // Limit news count depending on "simplified"
  const displayedNews = simplified ? newsList.slice(0, 6) : newsList.slice(0, 12);

  return (
    <Row gutter={[24, 24]}>
      {displayedNews.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title?.length > 60 ? `${news.title.substring(0, 60)}...` : news.title}
                </Title>
                {news.image_url && (
                  <img
                    src={news.image_url}
                    alt="news"
                    style={{ maxHeight: '150px', width: '100%', objectFit: 'cover' }}
                  />
                )}
              </div>
              <p>
                {news.description?.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                {news.source_icon && (
                  <Avatar src={news.source_icon} alt={news.source_name} />
                )}
                <Text className="provider-name">{news.source_name}</Text>
                <Text>{moment(news.published_at).startOf('ss').fromNow()}</Text>
              </div>
            </a> 
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;
