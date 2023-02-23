class BooksController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        book = Book.create!(book_params)
        render json: book, status: :created
    end

    def index
        books = Book.all
        render json: books
    end

    def show
        book = Book.find_by(id: params[:id])
        render json: book
    end

    def update
        book = Book.find(params[:id])
        book.update!(book_params)
        render json: book
    end

    private

    def book_params
        params.permit(:title, :author, :genre, :description, :image_url, :available)
    end

    def record_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: {error: "book not found"}, status: :not_found
    end

end
