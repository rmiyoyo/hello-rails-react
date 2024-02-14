greetings = ['What is up John', 'Aloha John', 'Habari John']

greetings.each do |item|
  Greeting.create!(message: item)
end
