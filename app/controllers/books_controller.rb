class BooksController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def create
        book = Book.create!(book_params)
        render json: book, status: :created
    end

    def index
        books = Book.all
        render json: books
    end

    private

    def book_params
        params.permit(:title, :author, :genre, :description)
    end

    def record_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
