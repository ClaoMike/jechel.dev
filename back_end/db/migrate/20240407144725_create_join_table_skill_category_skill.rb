class CreateJoinTableSkillCategorySkill < ActiveRecord::Migration[7.1]
  def change
    create_join_table :skill_categories, :skills do |t|
      # t.index [:skill_category_id, :skill_id]
      # t.index [:skill_id, :skill_category_id]
    end
  end
end
