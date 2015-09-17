class Newsletters < ActiveRecord::Migration
	def change
		create_table :newsletters do |t|
			t.string :username
			t.boolean :gender
			t.string :email
			t.boolean :subscribe

			t.timestamps null: false
		end
	end
end