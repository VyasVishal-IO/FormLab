import { GetFormStats, GetForms } from "@/actions/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ReactNode, Suspense } from "react";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";
import { Separator } from "@/components/ui/separator";
import CreateFormBtn from "@/components/CreateFormBtn";
import { Form } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { formatDistance } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="container mx-auto">
        <Suspense fallback={<StatsCards loading={true} />}>
          <CardStatsWrapper />
        </Suspense>
        
        <Separator className="my-8 bg-white/20" />
        
        <h2 className="text-5xl font-bold mb-8 text-white tracking-tight border-b border-white/20 pb-4">
          Your Forms
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CreateFormBtn />
          <Suspense
            fallback={[1, 2, 3, 4].map((el) => (
              <FormCardSkeleton key={el} />
            ))}
          >
            <FormCards />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsCards loading={false} data={stats} />;
}

interface StatsCardProps {
  data?: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}

function StatsCards(props: StatsCardProps) {
  const { data, loading } = props;

  return (
    <div className="w-full pt-8 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total visits"
        icon={<LuView className="text-white" />}
        helperText="All time form visits"
        value={data?.visits.toLocaleString() || ""}
        loading={loading}
        className="bg-black border border-white/20 hover:bg-white/5 transition-all duration-300"
      />

      <StatsCard
        title="Total submissions"
        icon={<FaWpforms className="text-white" />}
        helperText="All time form submissions"
        value={data?.submissions.toLocaleString() || ""}
        loading={loading}
        className="bg-black border border-white/20 hover:bg-white/5 transition-all duration-300"
      />

      <StatsCard
        title="Submission rate"
        icon={<HiCursorClick className="text-white" />}
        helperText="Visits that result in form submission"
        value={data?.submissionRate.toLocaleString() + "%" || ""}
        loading={loading}
        className="bg-black border border-white/20 hover:bg-white/5 transition-all duration-300"
      />

      <StatsCard
        title="Bounce rate"
        icon={<TbArrowBounce className="text-white" />}
        helperText="Visits that leaves without interacting"
        value={data?.submissionRate.toLocaleString() + "%" || ""}
        loading={loading}
        className="bg-black border border-white/20 hover:bg-white/5 transition-all duration-300"
      />
    </div>
  );
}

export function StatsCard({
  title,
  value,
  icon,
  helperText,
  loading,
  className,
}: {
  title: string;
  value: string;
  helperText: string;
  className: string;
  loading: boolean;
  icon: ReactNode;
}) {
  return (
    <Card className={`${className} rounded-xl p-6 text-white`}>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-sm font-medium text-white/70">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold tracking-tight">
          {loading && (
            <Skeleton className="bg-white/10">
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
        <p className="text-xs text-white/50 pt-2">{helperText}</p>
      </CardContent>
    </Card>
  );
}

function FormCardSkeleton() {
  return <Skeleton className="bg-black border border-white/20 h-[190px] w-full rounded-xl" />;
}

async function FormCards() {
  const forms = await GetForms();
  return (
    <>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  );
}

function FormCard({ form }: { form: Form }) {
  return (
    <Card className="bg-black border border-white/20 text-white hover:bg-white/5 transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font-bold text-white">{form.name}</span>
          {form.published && <Badge className="bg-white text-black">Published</Badge>}
          {!form.published && <Badge className="bg-white/20 text-white">Draft</Badge>}
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-white/50 text-sm">
          {formatDistance(form.createdAt, new Date(), {
            addSuffix: true,
          })}
          {form.published && (
            <span className="flex items-center gap-2">
              <LuView className="text-white/50" />
              <span>{form.visits.toLocaleString()}</span>
              <FaWpforms className="text-white/50" />
              <span>{form.submissions.toLocaleString()}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[20px] truncate text-sm text-white/70">
        {form.description || "No description"}
      </CardContent>
      <CardFooter>
        {form.published && (
          <Button 
            asChild 
            className="w-full mt-2 text-md gap-4 bg-white text-black hover:bg-white/80 transition-all duration-300"
          >
            <Link href={`/forms/${form.id}`}>
              View submissions <BiRightArrowAlt />
            </Link>
          </Button>
        )}
        {!form.published && (
          <Button 
            asChild 
            className="w-full mt-2 text-md gap-4 bg-white/20 text-white hover:bg-white/30 transition-all duration-300"
          >
            <Link href={`/builder/${form.id}`}>
              Edit form <FaEdit />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}