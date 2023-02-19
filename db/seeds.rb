Book.all.destroy

puts "🌱 Seeding 🌱"

Book.create(title: "The Giving Tree", author: "Shel Silverstein", genre: "Fiction", description: "The book follows the lives of an apple tree and a boy, who develop a relationship with one another. The tree is very giving and the boy evolves into a taking teenager, a middle-aged man, and finally an elderly man. Despite the fact that the boy ages in the story, the tree addresses the boy as Boy his entire life.")
Book.create(title: "James and the Giant Peach", author: "Roald Dahl", genre: "Fantasy", description: "James and the Giant Peach is the story of a young boy who escapes an abusive home in a magical peach. Along the way, he makes new friends, and discovers the joys of freedom and friendship, which had previously been alien ideas to him.")

puts "Done seeding ✔️"