import { useState } from 'react';
import styled from 'styled-components'; 
import webtoonData from './webtoonData';
import WebtoonCard from './WebtoonCard';
import dailyWebtoonData from './dailyWebtoonData';

function WebtoonListView() {
    const [dataSource, setDataSource] = useState('popular');

    const sortedWebtoonData = [...dailyWebtoonData].sort((a, b) => {
        switch (dataSource) {
            case 'popular':
                return b.popularity - a.popularity;
            case 'update':
                return new Date(b.updateDate) - new Date(a.updateDate);
            case 'view':
                return b.views - a.views;
            case 'rating':
                return b.rating - a.rating;
            default:
                return 0;
        }
    });

    return (
        <div>
            <ComponentHead>
                <ComponentHead_text>수요일 웹툰</ComponentHead_text>
                <ComponentHead_buttonTabList>
                    <ComponentHead_buttonTab 
                        isActive={dataSource === 'popular'} 
                        onClick={() => setDataSource('popular')}
                    >
                        인기순
                    </ComponentHead_buttonTab>
                    <ComponentHead_buttonTab 
                        isActive={dataSource === 'update'} 
                        onClick={() => setDataSource('update')}
                    >
                        업데이트순
                    </ComponentHead_buttonTab>
                    <ComponentHead_buttonTab 
                        isActive={dataSource === 'view'} 
                        onClick={() => setDataSource('view')}
                    >
                        조회순
                    </ComponentHead_buttonTab>
                    <ComponentHead_buttonTab 
                        isActive={dataSource === 'rating'} 
                        onClick={() => setDataSource('rating')}
                    >
                        별점순
                    </ComponentHead_buttonTab>
                </ComponentHead_buttonTabList>
            </ComponentHead>

            <WebtoonList>
                {sortedWebtoonData.map((webtoon) => (
                    <WebtoonCard
                        key={webtoon.id}
                        imageUrl={webtoon.imageUrl}
                        title={webtoon.title}
                        author={webtoon.author}
                        rating={webtoon.rating}
                        type="Wed"
                    />
                ))}
            </WebtoonList>
        </div>
    );
}

export default WebtoonListView;

const ComponentHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const ComponentHead_text = styled.div`
    font-size: 20px;
`;

const ComponentHead_buttonTabList = styled.div`
  display: flex;
  gap: 10px;
`;

const ComponentHead_buttonTab = styled.button`
  padding: 10px 10px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  color: ${(props) => (props.isActive ? '#007bff' : '#333')}; /* Active color */
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')}; /* Optional bold for active */
`;


const WebtoonList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: flex-start;
    padding: 16px;
`;