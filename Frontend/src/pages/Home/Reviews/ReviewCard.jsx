import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
const ReviewCard = ({ review }) => {
  return (

      <div className="  flex items-center justify-center">
        <div className="card w-[340px] bg-base-100 shadow-xl rounded-3xl p-8">
          {/* Quote Icon */}
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
            <FaQuoteLeft className="text-primary text-2xl" />
          </div>

          {/* Description */}
          <p className="text-sm leading-7 text-base-content/70">
            {review.review}
          </p>

          {/* Divider */}
          <div className="divider before:border-dashed after:border-dashed my-6" />

          {/* User */}
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-14 rounded-full bg-primary">
                <img src={review.user_photoURL} alt="" />
              </div>
            </div>

            <div>
              <h3 className="font-bold text-primary">{review.name}</h3>
              <p className="text-sm text-base-content/60">
                Senior Product Designer
              </p>
            </div>
          </div>
        </div>
      </div>

  );
};

export default ReviewCard;
