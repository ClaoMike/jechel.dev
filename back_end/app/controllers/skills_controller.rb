class SkillsController < ApplicationController
  def index
    @categories = SkillCategory.includes(:skills)
    render json: @categories.to_json(include: { skills: { only: [:id, :name] } })
  end
end
