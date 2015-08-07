class LocationSerializer < ActiveModel::Serializer
  attributes :id, :number, :street, :city
end
