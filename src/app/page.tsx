'use client';

import { useState } from 'react';
import { Heart, Sparkles, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [gender1, setGender1] = useState<'male' | 'female' | null>(null);
  const [gender2, setGender2] = useState<'male' | 'female' | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalysis = async () => {
    if (!name1.trim() || !name2.trim()) {
      alert('请输入两个姓名');
      return;
    }
    
    setIsLoading(true);
    // 模拟分析过程
    setTimeout(() => {
      const params = new URLSearchParams({
        name1: name1.trim(),
        name2: name2.trim(),
        gender1: gender1 || '',
        gender2: gender2 || '',
      });
      window.location.href = `/result?${params.toString()}`;
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* 主容器 */}
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        
        {/* 头部标题区域 */}
        <header className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Heart className="w-12 h-12 text-pink-500 fill-current" />
              <Sparkles className="w-6 h-6 text-purple-500 absolute -top-2 -right-2" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Love AI
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            智能恋爱契合度分析
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            只需两个姓名，AI为你预测恋爱契合度
          </p>
        </header>

        {/* 核心功能区域 */}
        <main className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-700">
            
            {/* 输入区域 */}
            <div className="space-y-8">
              
              {/* 第一个姓名输入 */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  第一个姓名
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    placeholder="请输入第一个姓名"
                    className="w-full px-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-pink-500 focus:ring-4 focus:ring-pink-100 dark:focus:ring-pink-900 outline-none transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                    maxLength={10}
                  />
                  {/* 性别选择 */}
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => setGender1(gender1 === 'male' ? null : 'male')}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                        gender1 === 'male'
                          ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                          : 'border-gray-200 text-gray-600 hover:border-blue-300 dark:border-gray-600 dark:text-gray-400'
                      }`}
                    >
                      👨 男
                    </button>
                    <button
                      onClick={() => setGender1(gender1 === 'female' ? null : 'female')}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                        gender1 === 'female'
                          ? 'border-pink-500 bg-pink-50 text-pink-700 dark:bg-pink-900 dark:text-pink-300'
                          : 'border-gray-200 text-gray-600 hover:border-pink-300 dark:border-gray-600 dark:text-gray-400'
                      }`}
                    >
                      👩 女
                    </button>
                  </div>
                </div>
              </div>

              {/* 连接符号 */}
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-2 text-pink-500">
                  <Heart className="w-6 h-6 fill-current animate-pulse" />
                  <span className="text-lg font-medium">VS</span>
                  <Heart className="w-6 h-6 fill-current animate-pulse" />
                </div>
              </div>

              {/* 第二个姓名输入 */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  第二个姓名
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                    placeholder="请输入第二个姓名"
                    className="w-full px-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 outline-none transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                    maxLength={10}
                  />
                  {/* 性别选择 */}
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => setGender2(gender2 === 'male' ? null : 'male')}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                        gender2 === 'male'
                          ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                          : 'border-gray-200 text-gray-600 hover:border-blue-300 dark:border-gray-600 dark:text-gray-400'
                      }`}
                    >
                      👨 男
                    </button>
                    <button
                      onClick={() => setGender2(gender2 === 'female' ? null : 'female')}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                        gender2 === 'female'
                          ? 'border-pink-500 bg-pink-50 text-pink-700 dark:bg-pink-900 dark:text-pink-300'
                          : 'border-gray-200 text-gray-600 hover:border-pink-300 dark:border-gray-600 dark:text-gray-400'
                      }`}
                    >
                      👩 女
                    </button>
                  </div>
                </div>
              </div>

              {/* 分析按钮 */}
              <button
                onClick={handleAnalysis}
                disabled={isLoading || !name1.trim() || !name2.trim()}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>AI正在分析中...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>开始分析契合度</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </main>

        {/* 产品特色说明 */}
        <section className="mt-16 sm:mt-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                科学依据
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                基于姓名学和AI算法分析，提供科学的契合度预测
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-2xl flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                即时体验
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                无需注册，输入姓名即可获得详细的分析报告
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                个性化分析
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                每对姓名都有独特的分析报告和改善建议
              </p>
            </div>
          </div>
        </section>

        {/* 示例区域 */}
        <section className="mt-16 sm:mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            热门配对示例
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { name1: '张三', name2: '李四', score: '88%' },
              { name1: '王五', name2: '赵六', score: '92%' },
              { name1: '陈七', name2: '周八', score: '76%' },
            ].map((example, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">{example.name1} × {example.name2}</span>
                  <span className="text-pink-600 dark:text-pink-400 font-semibold">{example.score}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
