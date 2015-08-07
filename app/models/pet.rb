class Pet < ActiveRecord::Base
  belongs_to :contact
  belongs_to :location
end
