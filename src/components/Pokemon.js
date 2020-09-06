import React from 'react'

export default function Pokemon(props) {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;

  return (
    <div>
      {`This is a pokemon page for pokemon #${pokemonId}`}
    </div>
  )
}
