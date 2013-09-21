class CreateBuildFiles < ActiveRecord::Migration
  def change
    create_table :build_files do |t|

      t.timestamps
    end
  end
end
