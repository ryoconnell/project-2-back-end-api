class Contact < ActiveRecord::Base
  has_many :pets
  has_many :locations, through: :pets

  # has_attached_file :poster,  #Or whatever you want to call the image you're uploading.
  #             :styles => { :medium => "300x300>", :thumb => "100x100>" },
  #             :default_url => "/images/:style/missing.png"
  # validates_attachment_content_type :poster, :content_type => /\Aimage\/.*\Z/
end
