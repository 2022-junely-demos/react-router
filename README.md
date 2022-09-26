# Cartoon Cats

## Routes

- Home "/" -- render the Home component
- Cat List "/cats" -- render the CatList component
- Cat Detail "/cats/:id" -- render the Cat Detail

1. Home Route
   - Link to Cat List
2. Cat List
   - useCats -- load the list of cats from supabase
   - link to each individual cat detail page
3. Cat Detail
   - useCat -- load the individual cat
