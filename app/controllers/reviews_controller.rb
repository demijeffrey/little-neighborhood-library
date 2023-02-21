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

    def update
        review = Review.find(params[:id])
        if review
            review.update(review_params)
            render json: review
        else
            render json: {error: "Review not found"}, status: :not_found
        end
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
    end

    private

    def review_params
        params.require(:review).permit(:id, :comment, :rating, :user_id, :book_id)
    end

    def record_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
