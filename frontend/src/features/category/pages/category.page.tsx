import { useState } from 'react';

type Category = {
    id: number;
    name: string;
};

const CategoryPage = () => {
    const [categories, setCategories] = useState<Category[]>([
        { id: 1, name: 'Filter' },
        { id: 2, name: 'Engine' },
    ]);

    const [newCategory, setNewCategory] = useState('');

    const handleAdd = () => {
        if (!newCategory.trim()) return;

        const newItem: Category = {
            id: Date.now(),
            name: newCategory,
        };

        setCategories((prev) => [...prev, newItem]);
        setNewCategory('');
    };

    const handleDelete = (id: number) => {
        setCategories((prev) => prev.filter((c) => c.id !== id));
    };

    return (
        <div className="space-y-6">
            {/* HEADER */}
            <div>
                <h1 className="text-2xl font-semibold text-slate-900">
                    Categories
                </h1>
                <p className="text-sm text-slate-500">
                    Manage inventory categories
                </p>
            </div>

            {/* ADD CATEGORY */}
            <div className="bg-white border rounded-lg p-4 shadow-sm flex gap-2">
                <input
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Enter category name..."
                    className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    onClick={handleAdd}
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                >
                    Add
                </button>
            </div>

            {/* TABLE */}
            <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-slate-100 text-slate-500 text-xs">
                            <th className="text-left px-4 py-3">ID</th>
                            <th className="text-left px-4 py-3">Name</th>
                            <th className="text-right px-4 py-3">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y">
                        {categories.map((cat) => (
                            <tr key={cat.id} className="hover:bg-slate-50">
                                <td className="px-4 py-3">{cat.id}</td>
                                <td className="px-4 py-3 font-medium text-slate-800">
                                    {cat.name}
                                </td>

                                <td className="px-4 py-3 text-right">
                                    <button
                                        onClick={() => handleDelete(cat.id)}
                                        className="text-red-600 hover:underline text-xs"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {categories.length === 0 && (
                            <tr>
                                <td
                                    colSpan={3}
                                    className="text-center py-6 text-slate-400"
                                >
                                    No categories yet
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoryPage;
