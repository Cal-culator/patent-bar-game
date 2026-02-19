"use client";

import { useState, useMemo } from "react";
import { MPEPSection } from "@/types";

interface MPEPViewerProps {
  sections: MPEPSection[];
  accentColor: string;
  onSectionView: (id: string) => void;
  onSearchPerformed: () => void;
}

function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const regex = new RegExp(
    `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    "gi"
  );
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-[var(--color-primary)]/30 text-inherit rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function MPEPViewer({
  sections,
  accentColor,
  onSectionView,
  onSearchPerformed,
}: MPEPViewerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(
    null
  );
  const [tocOpen, setTocOpen] = useState(true);

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const q = searchQuery.toLowerCase();
    return sections.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.content.toLowerCase().includes(q) ||
        s.number.toLowerCase().includes(q)
    );
  }, [sections, searchQuery]);

  const selectedSection = sections.find((s) => s.id === selectedSectionId);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    if (value.trim()) {
      onSearchPerformed();
    }
  };

  const handleSelectSection = (id: string) => {
    setSelectedSectionId(id);
    onSectionView(id);
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] overflow-hidden">
      {/* Search input */}
      <div className="p-3 border-b-2 border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search MPEP text..."
            className="flex-1 text-sm font-semibold bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-xl px-3 py-1.5 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-selected)]"
            data-testid="mpep-search-input"
          />
          <button
            onClick={() => setTocOpen(!tocOpen)}
            className="text-xs font-bold px-2 py-1.5 rounded-xl border-2 border-b-4 border-[var(--color-border)] border-b-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] active:border-b-2 active:translate-y-[2px]"
          >
            {tocOpen ? "Hide TOC" : "Show TOC"}
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* TOC panel */}
        {tocOpen && (
          <div className="w-48 shrink-0 border-r-2 border-[var(--color-border)] overflow-y-auto p-2">
            <p className="text-[10px] uppercase tracking-wider font-bold text-[var(--color-text-muted)] mb-2 px-1">
              Sections
            </p>
            <div className="space-y-0.5">
              {filteredSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSelectSection(section.id)}
                  className={`w-full text-left text-xs font-semibold px-2 py-1.5 rounded-xl transition-colors hover:bg-[var(--color-surface)] ${
                    selectedSectionId === section.id
                      ? "bg-[var(--color-selected-bg)] text-[var(--color-selected)]"
                      : ""
                  }`}
                  data-testid={`toc-${section.id}`}
                >
                  <span className="font-mono font-bold">
                    {section.number}
                  </span>
                  <span className="block text-[10px] text-[var(--color-text-muted)] leading-tight mt-0.5">
                    {section.title}
                  </span>
                </button>
              ))}
              {filteredSections.length === 0 && (
                <p className="text-xs font-semibold text-[var(--color-text-muted)] px-2 py-4 text-center">
                  No sections match your search.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Content panel */}
        <div className="flex-1 overflow-y-auto p-4">
          {selectedSection ? (
            <div>
              <div className="mb-3">
                <span
                  className="text-xs font-mono font-bold"
                  style={{ color: accentColor }}
                >
                  {selectedSection.number}
                </span>
                <h3 className="text-sm font-extrabold text-[var(--color-text-primary)]">
                  {selectedSection.title}
                </h3>
              </div>
              <div className="text-sm font-semibold text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
                {highlightText(selectedSection.content, searchQuery)}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-center">
              <div>
                <p className="text-2xl mb-2">📘</p>
                <p className="text-sm font-semibold text-[var(--color-text-muted)]">
                  Select a section from the TOC
                  <br />
                  or search for a keyword.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
