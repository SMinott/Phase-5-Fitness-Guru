class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :gender
      t.integer :age
      t.string :email
      t.string :username
      t.string :city
      t.string :state
      t.integer :height
      t.integer :weight
      t.string :fitness_level
      t.string :goal1
      t.string :goal2
      t.string :bio
      t.string :profile_image

      t.timestamps
    end
  end
end
