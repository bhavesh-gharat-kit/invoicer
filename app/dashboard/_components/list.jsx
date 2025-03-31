import { DeleteIcon, Edit } from "lucide-react"; 
import React from "react";

export default function List({ items }) {
  return (
    <ul className="text-slate-600 text-sm grid gap-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <li>
            {item.quantity} {item.item}
          </li>
          <li>{item.price}</li>

          <ul className="flex items-center justify-center gap-2">
            <li>
              <button
                onClick={() => items.handleDelete(item.id)}
                variant="destructive"
              >
                <DeleteIcon />
              </button>
            </li>
            <li>
              <button
                onClick={() => items.handleEdit(item.id)}
                variant="outline"
              >
                <Edit />
              </button>
            </li>
          </ul>
        </div>
      ))}
    </ul>
  );
}
