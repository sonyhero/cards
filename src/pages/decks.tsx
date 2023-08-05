import { Body, Cell, Head, HeadCell, Root, Row } from '../components/ui'
import { useGetDecksQuery } from '../services/decks/decks.ts'

export const Decks = () => {
  const { isLoading, data } = useGetDecksQuery({
    itemsPerPage: 20,
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      isLoading: {isLoading.toString()}
      <Root>
        <Head>
          <HeadCell>Name</HeadCell>
          <HeadCell>Cards</HeadCell>
          <HeadCell>Last Updated</HeadCell>
          <HeadCell>Created By</HeadCell>
        </Head>
        <Body>
          {data?.items.map(deck => {
            return (
              <Row key={deck.id}>
                <Cell>{deck.name}</Cell>
                <Cell>{deck.cardsCount}</Cell>
                <Cell>{new Date(deck.updated).toLocaleString('en-GB')}</Cell>
                <Cell>{deck.author.name}</Cell>
              </Row>
            )
          })}
        </Body>
      </Root>
    </div>
  )
}
