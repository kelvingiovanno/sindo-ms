import { useEffect, useState } from "react";
import { Field, FieldLabel } from "../ui/field";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useSearchParams } from "react-router";

type Props = {
  page: number;
  row: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onRowChange: (row: number) => void;
};

const Pangination = ({
  page,
  row,
  totalPages,
  onPageChange,
  onRowChange,
}: Props) => {

  const getVisiblePages = (page: number, totalPages: number) => {
    const maxVisible = 5;

    let start = page - 2;
    let end = page + 2;

    if (page <= 3) {
      start = 1;
      end = Math.min(maxVisible, totalPages);
    }

    if (page >= totalPages - 2) {
      end = totalPages;
      start = Math.max(1, totalPages - maxVisible + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getVisiblePages(page, totalPages);

  return (
    <div className="flex items-center justify-between gap-4">
      {/* Rows */}
      <Select
        value={row.toString()}
        onValueChange={(val) => {
          onRowChange(Number(val));
          onPageChange(1);
        }}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="25">25</SelectItem>
          <SelectItem value="50">50</SelectItem>
        </SelectContent>
      </Select>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (page > 1) onPageChange(page - 1);
              }}
            />
          </PaginationItem>

          {pages.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(p);
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (page < totalPages) onPageChange(page + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Pangination;