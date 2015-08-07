class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :color
end
