# مدیریت دسته‌بندی اسناد بایوآرک

## فلسفه توسعه

### چرا این رویکرد؟

من در این پروژه سعی کردم تا تعادل درستی بین کیفت کد و زمان تحویل داشته باشم. در واقع من بر اساس اصل YAGNI (You Aren't Gonna Need It) بود.

به صورت کلی تنها چیزهایی که واقعا برای نمایش مهارت هام ضروری بودن رو توسعه دادم.


### الویت های من در این پروژه:
- معماری قابل نگهداری و تمیز
- کیفت کد بالا به همراه TypeScript
- استفاده از الگو های مدرن React
- عملکرد مناسب برای داده های متوسط
- تجربه کاربری ساده

## دلایل انتخاب کتاب خانه ها

### TypeScript

- جلوگیری از خطاهای Compile Time
- IntelliSense قدرتمند
- بازنویسی کردن و توسعه امکانات جدید رو خیلی ساده تر میکنه
- ارائه مستندات به صورت پیشفرض بر اساس تایپ های تعریف شده

### PandaCSS به جای Tailwind یا Css-in-Js

```typescript
const Button = styled("button", {
  base: {
    padding: "9px 22px",
    borderRadius: "4px",
    fontFamily: "vazirmatn"
  },
  variants: {
    intent: {
      primary: { backgroundColor: "#36459B" },
      secondary: { backgroundColor: "#E6ECF6" }
    }
  }
})
```

**دلایل انتخاب PandaCSS**
- Type Safety: هیچ مشکل Typo یا کلاس های اشتباهی نخواهیم داشت و اکثرا در زمان کامپایل گزارش خواهند شد
- Zero Runtime: بر خلاف کتاب خونه ای مرتبط با Css-in-JS مثل Styled-Components هیچ کد Javascript تو نتیجه نهایی وجود ندارد و تمامی فایل های CSS مورد نیاز موقع Compile تهیه خواهند شد
- Bundle Size: مثل Tailwind CSS فقط کلاس ها و استایل هایی که استفاده شدن در خروجی نهایی گذاشته میشن که باعث کاهش هجم Bundle نهایی میشه
- Design System Friendly: توی این کتاب خونه مدیریت Themes و Tokens و ایجاد کامپوننت های قابل استفاده با Variants های پیچیده خیلی راحت هست و به ما کمک میکنه یک سیستم دیزاین کارآمد داشته باشیم
- Developer Experience: Auto-Complete و بررسی ارور بسیار عالی داره همچنین تو مشکلاتی مثل اسم های اشتباه و ... که توی توسعه خیلی بهمون کمک میکنه

### React Router v7
```typescript
// File-based routing خودکار
const modules = import.meta.glob("./pages/**/route.{ts,tsx}", {
  eager: true
});
```

من با استفاده از کتاب خونه React-Route و امکاناتی که Vite بهم میداد یک Router بر اساس File System طراحی کردم که بهمون کمک میکنه تو پروژه های بزرگ تر راحت بتونیم هر صفحه رو بروزرسانی یا صفحات دیگه اضافه بکنیم.

البته پیاده سازی که من انجام دادم خیلی ساده هست و امکانات بیشتری میشه بهشون اضافه بشه

همچنین تمامی Route های پیدا شده در زمان کامپایل هست و هیچ مشکلی برای Performance در محیط Production برای ما ایجاد نمیکنه.

همچنین به با این ساختار ما میتونیم از Lazy-Loading و .... که React-Router به ما ارائه میده استفاده کاملی ببریم و محدودیتی نداریم


### React Hook Form + Zod
```typescript
const schema = z.object({
  name: z.object({
    fa: z.string().min(1, "نام دسته بندی باید وارد شود"),
    en: z.string().regex(/^[a-zA-Z\s]+$/, "باید فقط حروف انگلیسی باشد"),
  }),
  parentId: z.string().optional(),
});
```
**چرا از این ترکیب استفاده کردم؟**
- Re-Render کمتر در فرم ها
- Type-Safe بودن و Validatio قدرتمند
- Error Handling یکپارچه
- عملکردی بهینه حتی در فرم هایی که پیچیده هستند

## معماری پروژه

### ساختار Component
```
src/
├── components/
│   ├── Form/
│   │   ├── Primitives/     # TextInput, SelectInput, Label, FieldError
│   │   ├── Layouts/        # Field
│   │   └── Controls/       # TextInputField, SelectField
│   ├── Navbar/             # Navigation system با desktop/mobile variants
│   ├── Icons/              # SVG icon management با auto-import
│   ├── Button.tsx          # Component اصلی دکمه با variants
│   ├── Modal.tsx           # Portal-based modal system
│   └── AparatEmbed.tsx     # Video embedding
├── pages/categories/       # صفحه اصلی با context provider
├── layouts/MainLayout/     # Layout کلی با navbar
└── hooks/                  # useClickOutside
```

**فلسفه معماری:**
- Form System: ساختار سه‌لایه Primitives → Layouts → Controls
- Feature-based: هر page با context و components مخصوص خودش
- Shared Components: کامپوننت‌های مشترک در سطح اول
- Auto-generated: Icons و Routes بصورت خودکار از فایل‌ها

### مدیریت State
```typescriptreact
// Context برای state مشترک
const CategoriesContext = createContext<CategoriesContextType>();

// Local state برای کامپوننت‌های خاص
const [modalOpen, setModalOpen] = useState(false);

// Custom hooks برای منطق پیچیده
const useClickOutside = (handler, enabled) => { ... }
```

**چرا Cotext API?**
- استفاده از Redux برای پروژه در این سطح OverKill محسوب میشود.
- Server State نداریم که نیازی به React-Query داشته باشیم
- Context برای state به این پیچیدگی حال حاظر کافی بود
- Boilerplate و پیچیدگی کمتر

### الگوریتم‌های درختی
```typescript
// حذف recursuve با children
const collectIdsToRemove = (targetId: string, acc: Set<string>) => {
  acc.add(targetId);
  const children = map.get(targetId) ?? [];
  for (const child of children) {
    collectIdsToRemove(child.id, acc);
  }
  return acc;
};
```

**پیچیدگی‌های پیاده‌سازی شده:**
- ساخت درخت از داده های Flat
- جستجوی هوشمند که Parent رو هم چک میکنه.
- استفاده از Cascade برای حذف تمای زیر مجموعه ها
- فیلتر کردن داده ها به صورت Real-Time

## بهینه‌سازی عملکرد

### Memoization
```typescriptreact
const tree = useMemo<CategoryTree[]>(() => {
  // محاسبات سنگین tree building
  const byParent = filteredRawList.reduce((acc, node) => {
    // منطق پیچیده group by parent
  }, new Map());
  
  return buildTree(byParent);
}, [filteredRawList]);
```

## تصمیمات عمده Development

### چرا Testing ننوشتم؟

برای این تسک تمرکز اصلی روی مهارت های معماری و نحوه پیاده سازی بود. تست کردن جزو موارد اصلی نبود و وقت محدودی داشتم

### چرا API Integration نکردم؟

برای نمایش و عملکرد درست پروژه Mock Data کافی بود و بازم هدف اصلی پروژه نمایش مهارت های فرانت اند و منتطق سمت کلاینت بود.

### چرا Error Boundaries اضافه نکردم؟

چون هیچ درخواستی به API خارجی یا عملیات پریسکی نبود. تمام فرایند ها به صورت لوکال انجام میشن و سناریو های پروژه خطا های محدودی دارن.

### چرا Loading States نداریم؟

همه عملیات ها به صورت Sync و سریع انجام میشن و هیچ تسک Async نداریم یا با پردازش بالا که نیاز به نمایش صفحه لودینگ داشته باشیم


## نکات تکنیکی پیشرفته

### Custom Hooks

```typescript
// Hook پیشرفته برای click outside
export function useClickOutside<T extends HTMLElement>(
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled: boolean = true
): RefObject<T | null> {
  // منطق پیچیده event handling
}
```

### Component Composition
// الگوی compose برای reusability

```typescriptreact
export const TextInputField = ({ label, error, ...props }) => (
  <Field>
    <Label error={Boolean(error)}>{label}</Label>
    <TextInput error={Boolean(error)} {...props} />
    {error && <FieldError>{error}</FieldError>}
  </Field>
);
```

### Type Safety پیشرفته
```typescript
// تایپ های پیچیده برای tree structure
interface CategoryTree extends Omit<CategoryFlat, "createdAt"> {
  children: CategoryTree[];
}

// Generic types برای hooks
function useClickOutside<T extends HTMLElement = HTMLElement>
```


## اجرای پروژه

**نصب و راه‌اندازی**

```bash
# dependencies
pnpm install

# development server
pnpm dev

# production build
pnpm build
```

## ساختار فایل‌ها

```
src/
├── components/          # کامپوننت‌های قابل استفاده مجدد
├── pages/categories/    # صفحه مدیریت دسته‌بندی
├── layouts/            # Layout کلی
├── hooks/              # Custom hooks
└── styled-system/      # Generated PandaCSS files
````