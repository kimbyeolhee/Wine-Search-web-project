import { Card, Image, Rate, Button } from "antd";
import { useState } from "react";
import styled from "styled-components";

import DeleteModal from "./DeleteModal";

const ReviewkItemContainer = styled(Card)`
  border: None;
  border-radius: 15px;
  background-color: #ffffff;

  width: 751px;
  height: auto;

  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 0 1px rgb(87 87 87 / 10%), 0 8px 8px 0 rgb(234 224 218 / 30%);
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;
`;

const ImgWrapper = styled.div`
  margin-right: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoWrapper = styled.div`
  position: flex;
`;

const ReviewImg = styled(Image)`
  border-radius: 5px;
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Date = styled.div`
  color: #c4c4c4;
  padding-top: 5px;
  margin-left: 230px;
`;

const WineName = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  margin-top: 3px;
  margin-bottom: 10px;

  color: #000000;
`;
const ContentWrapper = styled.div`
  margin-bottom: 40px;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  position: absolute;
  bottom: 0;
  right: 0;
`;

const MyReviewButton = styled(Button)`
  font-weight: 400;
  font-size: 14px;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 5px;
`;

function ReviewItem({ reviewInfo, myReviewList, setMyReviewList }) {
  const [isModal, setIsModal] = useState(false);

  const showModal = () => {
    setIsModal(true);
  };

  return (
    <>
      <ReviewkItemContainer>
        <ReviewWrapper>
          <ImgWrapper>
            <ReviewImg
              width={200}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Mg0Z3jjdhhILbiweMfnMc4JSYlaf267GyA&usqp=CAU"
            />
          </ImgWrapper>
          <InfoWrapper>
            <div className="review_wrapper">
              <WineName>와인 이름 위치</WineName>
              {/* <WineName>{reviewInfo.title}</WineName> */}
              <InfoSection>
                <Rate defaultValue={reviewInfo.rating} disabled={"true"} />
                <Date className="diary_date">
                  {reviewInfo.createdAt.slice(0, 10)}
                </Date>
              </InfoSection>
              <ContentWrapper>{reviewInfo.content}</ContentWrapper>
            </div>
            <BtnWrapper>
              <MyReviewButton>수정</MyReviewButton>
              <MyReviewButton onClick={showModal} style={{ color: "red" }}>
                삭제
              </MyReviewButton>
            </BtnWrapper>
            {isModal && (
              <DeleteModal
                isModal={isModal}
                setIsModal={setIsModal}
                reviewId={reviewInfo.id}
                myReviewList={myReviewList}
                setMyReviewList={setMyReviewList}
              />
            )}
          </InfoWrapper>
        </ReviewWrapper>
      </ReviewkItemContainer>
    </>
  );
}

export default ReviewItem;
