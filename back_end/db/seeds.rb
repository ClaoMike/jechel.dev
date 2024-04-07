# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

ios_category = SkillCategory.find_or_create_by(name: "IOS")

# Find or create skills for the "IOS" category
ios_category.skills.find_or_create_by(name: "Swift")
ios_category.skills.find_or_create_by(name: "SwiftUI")
ios_category.skills.find_or_create_by(name: "UIKit")
ios_category.skills.find_or_create_by(name: "Cocoapods")
ios_category.skills.find_or_create_by(name: "fastlane")
ios_category.skills.find_or_create_by(name: "Unit/UI Snapshot Testing")
ios_category.skills.find_or_create_by(name: "XCTest")
ios_category.skills.find_or_create_by(name: "Firebase")
ios_category.skills.find_or_create_by(name: "TestFlight")
ios_category.skills.find_or_create_by(name: "git")
ios_category.skills.find_or_create_by(name: "CI/CD")

web_development_category = SkillCategory.find_or_create_by(name: "Web Development")

web_development_category.skills.find_or_create_by(name: "React")
web_development_category.skills.find_or_create_by(name: "JavaScript")
web_development_category.skills.find_or_create_by(name: "HTML")
web_development_category.skills.find_or_create_by(name: "CSS")

game_development_category = SkillCategory.find_or_create_by(name: "Game Development")

game_development_category.skills.find_or_create_by(name: "Java")
game_development_category.skills.find_or_create_by(name: "libGDX")
game_development_category.skills.find_or_create_by(name: "C#")
game_development_category.skills.find_or_create_by(name: "Unity 2D")
game_development_category.skills.find_or_create_by(name: "Python")
game_development_category.skills.find_or_create_by(name: "Phaser 3")
game_development_category.skills.find_or_create_by(name: "OOP")

word_processing_category = SkillCategory.find_or_create_by(name: "Word Processing")

word_processing_category.skills.find_or_create_by(name: "LATEX")

video_editing_category = SkillCategory.find_or_create_by(name: "Video Editing")

video_editing_category.skills.find_or_create_by(name: "Procreate")
video_editing_category.skills.find_or_create_by(name: "Final Cut Pro")
video_editing_category.skills.find_or_create_by(name: "GarageBand")