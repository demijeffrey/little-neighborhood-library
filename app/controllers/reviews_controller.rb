class ReviewsController < ApplicationController

    def create
        book = Book.find_by(id: params[:book_id])
        review = book.reviews.create(review_params)
        review.user = current_user
        # review = Review.create(review_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: {error: "invalid review"}, status: :unprocessable_entity
        end
    end

    def show
    end

    private

    def review_params
        params.require(:review).permit(:comment, :rating, :user_id, :book_id)
    end

end
