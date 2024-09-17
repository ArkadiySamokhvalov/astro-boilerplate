module.exports = {
  types: [
    {
      value: "feat",
      name: "feat:      Добавление нового функционала",
    },
    {
      value: "fix",
      name: "fix:       Исправление ошибок",
    },
    {
      value: "docs",
      name: "docs:      Изменение документации",
    },
    {
      value: "chore",
      name: "chore:      Изменения в процессе сборки или вспомогательных инструментах",
    },
    {
      value: "style",
      name: "style:     Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)",
    },
    {
      value: "refactor",
      name: "refactor:      Изменение кода, которое не исправляет ошибку и не добавляет функцию",
    },
    {
      value: "revert",
      name: "revert:      Откат изменений",
    },
    {
      value: "ci",
      name: "ci:      Изменения в CI",
    },
    {
      value: "test",
      name: "test:      Изменения в тестах",
    },
    {
      value: "perf",
      name: "perf:      Изменение кода, повышающее производительность",
    },
    {
      value: "build",
      name: "build:      Изменения в сборке",
    },
    {
      value: "wip",
      name: "wip:      Работа в процессе",
    },
  ],
  scopes: ["project"],
  scopeOverrides: {
    fix: [
      { name: "merge" },
      { name: "style" },
      { name: "test" },
      { name: "hotfix" },
    ],
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  skipQuestions: ["footer", "breaking"],
  subjectLimit: 100,

  messages: {
    type: "Какие изменения вы вносите?",
    scope: "\nВыберите ОБЛАСТЬ, которую вы изменили (опционально):",
    // Спросим если allowCustomScopes в true
    customScope: "Укажите свою ОБЛАСТЬ:",
    subject: "Напишите КОРОТКОЕ описание:\n",
    body: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
    breaking: "Список BREAKING CHANGES (опционально):\n",
    footer:
      "Место для мета данных (тикетов, ссылок и остального). Например: SECRETMRKT-700, SECRETMRKT-800:\n",
    confirmCommit: "Вас устраивает получившийся коммит?",
  },
};
