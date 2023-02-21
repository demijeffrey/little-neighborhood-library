class ReviewsController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def create
        book = Book.find(params[:book_id])
        review = book.reviews.create!(review_params)
        review.user = current_user
        # byebug
        # review = Review.create!(review_params)
        render json: review, status: :created
    end

    def index
        reviews = Review.all
        render json: reviews
    end

    def destroy
        byebug
        review = Review.find(params[:id])
        review.destroy
    end

    private

    def review_params
        params.require(:review).permit(:comment, :rating, :user_id, :book_id)
    end

    def record_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
