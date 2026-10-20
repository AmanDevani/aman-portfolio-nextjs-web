"use client";

import { motion } from "motion/react";

import { Card } from "@/components/ui/card";

import { personalInfo } from "@/data/personal";
import { skillCategories } from "@/data/skills";

const stack = skillCategories.flatMap((skillCategory) => skillCategory.skills).map((skill) => skill.name);

interface CodeToken {
  text: string;
  className: string;
}

interface CodeLine {
  indent: number;
  tokens: CodeToken[];
}

const punctuation = "text-muted-foreground";
const stringValue = "text-primary";
const keyword = "text-accent";

function property(key: string, value: CodeToken[]): CodeLine {
  return {
    indent: 1,
    tokens: [
      { text: key, className: "text-foreground" },
      { text: ": ", className: punctuation },
      ...value,
      { text: ",", className: punctuation },
    ],
  };
}

const codeLines: CodeLine[] = [
  {
    indent: 0,
    tokens: [
      { text: "const ", className: keyword },
      { text: "developer", className: stringValue },
      { text: " = {", className: punctuation },
    ],
  },
  property("name", [{ text: `"${personalInfo.name}"`, className: stringValue }]),
  property("role", [{ text: `"${personalInfo.role}"`, className: stringValue }]),
  property("location", [{ text: `"${personalInfo.location}"`, className: stringValue }]),
  property("stack", [
    { text: "[", className: punctuation },
    ...stack.flatMap((name, index) => [
      { text: `"${name}"`, className: stringValue },
      ...(index < stack.length - 1 ? [{ text: ", ", className: punctuation }] : []),
    ]),
    { text: "]", className: punctuation },
  ]),
  property("openToWork", [{ text: "true", className: keyword }]),
  { indent: 0, tokens: [{ text: "};", className: punctuation }] },
];

export default function CodeWindow() {
  return (
    <Card className="gap-0 py-0 shadow-xl bg-card/80 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="ml-3 text-xs font-mono text-muted-foreground">developer.ts</span>
      </div>

      <pre className="p-4 sm:p-5 text-[0.78rem] sm:text-sm font-mono leading-7 whitespace-pre-wrap break-words">
        <code className="flex flex-col">
          {codeLines.map((line, lineIndex) => (
            <motion.span
              key={lineIndex}
              className="flex"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.6 + lineIndex * 0.12 }}
            >
              <span className="mr-4 w-4 shrink-0 select-none text-right text-muted-foreground/50">
                {lineIndex + 1}
              </span>
              <span className="min-w-0">
                {"  ".repeat(line.indent)}
                {line.tokens.map((token, tokenIndex) => (
                  <span key={tokenIndex} className={token.className}>
                    {token.text}
                  </span>
                ))}
                {lineIndex === codeLines.length - 1 && (
                  <span className="caret ml-1 animate-blink" aria-hidden="true" />
                )}
              </span>
            </motion.span>
          ))}
        </code>
      </pre>
    </Card>
  );
}
