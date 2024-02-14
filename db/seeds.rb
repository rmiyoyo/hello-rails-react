greetings = ['What is up John', 'Aloha John', 'Habari John', 'Hello John', 'Bonjour John',]

shuffled_greetings = greetings.shuffle

shuffled_greetings.each do |item|
  Greeting.create!(message: item)
end
