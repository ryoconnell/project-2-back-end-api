class Location < ActiveRecord::Base
  has_many :pets
  has_many :contacts, through: :pets
end
