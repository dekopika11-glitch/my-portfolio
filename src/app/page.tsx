//画像をインポート
import Image from 'next/image';　

// アイコンライブラリをインポート
import { FiMail, FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi"; // 修正点: 未使用だったアイコンを追加
import { SiJavascript, SiReact, SiNextdotjs, SiPython, SiC, SiCplusplus} from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
// --- データ定義 ---
const skills = [
  { icon: SiC, name: "C" },
  { icon: SiCplusplus, name: "C++" },
  { icon: TbBrandCSharp, name: "C#" },
  { icon: SiPython, name: "Python" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: FaFileExcel, name: "VBA" },
];

const works = [
  {
    title: "シフト管理アプリ",
    description: "アルバイト先で実際に運用しているシフト提出・管理アプリです。スタッフはスマホからカレンダーで希望を提出し、管理者は一覧・提出状況の確認や定休日・スタッフの管理ができます。デモ版は架空データで自由に操作できます（管理画面パスワード: demo）。",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    demo: "https://shift-app-demo-sigma.vercel.app",
    repo: "https://github.com/dekopika11-glitch/shift-app-demo",
  },
  {
    title: "TypeChase（タイピングゲーム）",
    description: "寿司打を参考にした日本語タイピングゲームです。直近の自分の平均速度から制限時間を毎回自動計算する仕組みや、shi/si・tsu/tuなどの表記揺れに対応した独自のローマ字判定を実装しました。",
    tags: ["JavaScript", "HTML", "CSS", "Web Audio API"],
    demo: "https://dekopika11-glitch.github.io/typing-chase/",
    repo: "https://github.com/dekopika11-glitch/typing-chase",
  },
  {
    title: "ポートフォリオサイト",
    description: "Next.jsとTailwind CSSで作成した、この自己紹介サイトです。シンプルさと見やすさを重視しました。",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/dekopika/my-portfolio",
  },
];

// 修正点: アイコンをJSXタグ(<FiMail />)からコンポーネント(FiMail)に変更
const socialLinks = [
  { icon: FiGithub, href: "https://github.com/dekopika", colorClass: "hover:text-gray-800" }, // ★ あなたのリンクに変更
  // { icon: FiLinkedin, href: "https://linkedin.com/in/your-username", colorClass: "hover:text-blue-700" }, // ★ あなたのリンクに変更
  { icon: FiMail, href: "mailto:dekopika11@gmail.com", colorClass: "hover:text-red-600" },
];

// スキルを表示するためのカードコンポーネント
const SkillCard = ({ icon: Icon, name }: { icon: React.ElementType; name: string }) => { // 修正点: propsの型と名前を変更
  return (
    <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm transition-transform hover:-translate-y-1">
      {/* 修正点: 受け取ったコンポーネントをここでJSXタグとして使用 */}
      <div className="text-4xl mb-2 text-blue-600"><Icon /></div>
      <p className="font-semibold text-gray-700">{name}</p>
    </div>
  );
};

// 実績を表示するためのカードコンポーネント
type Work = { title: string; description: string; tags: string[]; demo?: string; repo?: string };

const WorkCard = ({ title, description, tags, demo, repo }: Work) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm transition-shadow hover:shadow-lg">
      <h3 className="text-xl font-bold text-blue-700 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
            <FiExternalLink /> デモを見る
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
            <FiGithub /> GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <main className="container mx-auto max-w-3xl px-6 py-16">
        
        <section className="text-center mb-20">
          <Image
            src="/icon.jpg"
            alt="プロフィール写真"
            width={128}
            height={128}
            className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
          <h1 className="text-5xl font-extrabold mb-2">
            dekopika
          </h1>
          <p className="text-xl text-gray-600">
            学生エンジニア
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            こんにちは！ 私は学生エンジニアのdekopikaです。小さい頃からプログラミングに興味を持ち、高専の情報系を卒業後もっと深く学びたいと考え大学へ編入学しました。現在はプログラミングのお仕事で学費を賄っています。将来的には高専の頃から続けている自動運転の研究で社会に貢献できるエンジニアを目指しています。
          </p>
        </section>
        
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {skills.map((skill) => (
              <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">My Works</h2>
          <div className="space-y-6">
            {works.map((work) => (
              <WorkCard key={work.title} {...work} />
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Contact</h2>
          <p className="text-lg text-gray-600 mb-6">
            お仕事のご相談やご依頼など、お気軽にご連絡ください。
          </p>
          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className={`text-gray-500 ${link.colorClass || 'hover:text-blue-600'} transition-colors`}
                  target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer">
                    <Icon className="w-8 h-8" /> 
                </a>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="text-center py-8 mt-12 border-t border-gray-200">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} dekopika. All Rights Reserved.</p>
      </footer>
    </div>
  );
}