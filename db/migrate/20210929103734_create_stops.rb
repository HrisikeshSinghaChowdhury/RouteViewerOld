class CreateStops < ActiveRecord::Migration[6.1]
  def change
    create_table :stops do |t|
      t.string :create_stops
      t.string :from_address
      t.decimal :from_lat
      t.decimal :from_lon
      t.string :to_address
      t.decimal :to_lat
      t.decimal :to_lon

      t.timestamps
    end
  end
end
