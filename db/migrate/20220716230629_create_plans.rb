class CreatePlans < ActiveRecord::Migration[7.0]
  def change
    create_table :plans do |t|
      t.string :name
      t.string :description
      t.integer :fee

      t.timestamps
    end
  end
end
