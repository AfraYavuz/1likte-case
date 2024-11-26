"use client";
import { categories } from "@/data/categories";
import { CardListItem } from "../cardListItem";

export default function Card({ searchQuery }) {
  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="container flex justify-center mx-auto px-3 lg:py-12 lg:px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <CardListItem
            key={category.id}
            title={category.title}
            description={category.description}
            icon={category.icon}
            articleCount={category.articleCount}
          />
        ))}
      </div>
    </div>
  );
}
