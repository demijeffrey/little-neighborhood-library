class BookSerializer < ActiveModel::Serializer

  attributes :id, :title, :author, :genre, :description, :available
  
end