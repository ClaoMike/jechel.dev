class Skill < ApplicationRecord
    has_and_belongs_to_many :skill_categories
end
