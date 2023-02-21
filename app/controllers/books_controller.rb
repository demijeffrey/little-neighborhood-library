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

    def show
        book = Book.find_by(id: params[:id])
        render json: book
    end

    def update
        book = Book.find(params[:id])
        if book
            book.update(book_params)
            render json: book
        else
            render json: {error: "Not found"}, status: :not_found
        end
    end

    private

    def book_params
        params.permit(:title, :author, :genre, :description, :image_url, :available)
    end

    def record_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
