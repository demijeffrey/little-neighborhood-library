class ReviewsController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

before_action :authorize

    def create
        review = current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def index
        reviews = Review.all
        render json: reviews
    end

    def update
        review = current_user.reviews.find(params[:id])
        review.update!(review_params)
        render json: review
    end

    def destroy
        review = current_user.reviews.find(params[:id])
        review.destroy
    end

    private

    def review_params
        params.require(:review).permit(:id, :comment, :rating, :book_id)
    end

    def record_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: {error: "review not found"}, status: :not_found
    end

end
