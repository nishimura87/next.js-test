'use client';
import { useState } from 'react';
import Card from './Card';

interface ListProps {
  title: string;
}

interface CardData {
  id: number;
  title: string;
  description: string;
}

const List: React.FC<ListProps> = ({ title }) => {
  const [cards, setCards] = useState<CardData[]>([]);

  // カードを追加する関数
  const addCard = () => {
    const newCard: CardData = {
      id: cards.length + 1,
      title: `Task ${cards.length + 1}`,
      description: ''
    };
    setCards([...cards, newCard]);
  };

  // カードを削除する関数
  const deleteCard = (id: number) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <button className="mb-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={addCard}>Add Card</button>
      {cards.map(card => (
        <Card key={card.id} card={card} onDelete={() => deleteCard(card.id)} />
      ))}
    </div>
  );
};

export default List;