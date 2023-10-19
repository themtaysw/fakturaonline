10.times do
  Prismic::Post.create(
    id: SecureRandom.uuid,
    uid: Faker::Alphanumeric.unique.alpha(number: 10),
    author: Faker::Name.name,
    slug: Faker::Internet.slug(words: Faker::Lorem.words(number: 3).join(' ')),
    date: Faker::Date.between(from: 1.year.ago, to: Date.today),
    title: Faker::Lorem.sentence(word_count: 6),
    perex: Faker::Lorem.paragraph(sentence_count: 2),
    image: Faker::Placeholdit.image(size: "600x400"),
    body: Faker::Lorem.paragraphs.join("\n\n"),
    category_slug: Faker::Internet.slug(words: Faker::Lorem.words(number: 2).join(' ')),
    sub_category_slug: Faker::Internet.slug(words: Faker::Lorem.words(number: 2).join(' ')),
    locale: 'cs', # Předpokládám, že chcete kód jazyka
    created_at: Faker::Time.between(from: 1.year.ago, to: Time.now),
    updated_at: Faker::Time.between(from: 1.year.ago, to: Time.now)
  )
end
