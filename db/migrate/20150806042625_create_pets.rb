class CreatePets < ActiveRecord::Migration
  def change
    create_table :pets do |t|
      t.string :name
      t.string :species
      t.string :color

      t.timestamps null: false
    end
  end
end
