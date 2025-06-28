import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Mukul Dhiman",
    text: "Lorem ipsum dyco tih",
    replies: [
      {
        name: "Elon Musk",
        text: "Lorem ipsum dyco tih",
        replies: [
          {
            name: "Mukul Dhiman",
            text: "Lorem ipsum dyco tih",
            replies: [
              {
                name: "Elon Musk",
                text: "Lorem ipsum dyco tih",
                replies: [
                  {
                    name: "Mukul Dhiman",
                    text: "Lorem ipsum dyco tih",
                    replies: [
                      {
                        name: "Elon Musk",
                        text: "Lorem ipsum dyco tih",
                        replies: [
                          {
                            name: "Mukul Dhiman",
                            text: "Lorem ipsum dyco tih",
                            replies: [
                              {
                                name: "Elon Musk",
                                text: "Lorem ipsum dyco tih",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Mukul Dhiman",
    text: "Lorem ipsum dyco tih",
    replies: [
      {
        name: "Elon Musk",
        text: "Lorem ipsum dyco tih",
      },
    ],
  },
  {
    name: "Mukul Dhiman",
    text: "Lorem ipsum dyco tih",
    replies: [
      {
        name: "Elon Musk",
        text: "Lorem ipsum dyco tih",
      },
    ],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l ml-5">
        {comment.replies && comment.replies.length > 0 && (
          <CommentList comments={comment.replies} />
        )}
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
