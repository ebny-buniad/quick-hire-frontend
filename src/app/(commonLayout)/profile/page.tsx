import { getUser } from "@/app/service/user/get.user"
import Image from "next/image"
import { Mail, Calendar, Shield, User } from "lucide-react"

export default async function Profile() {

  const user = await getUser()

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">

        {/* Header */}
        <div className="flex items-center gap-6 border-b border-gray-200 pb-6">

          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-bold text-gray-600">
            {user.name?.charAt(0)}
          </div>

          {/* Name + Role */}
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>

            <div className="flex items-center gap-3 mt-1">

              <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
                {user.role}
              </span>

              <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                {user.status}
              </span>

            </div>
          </div>

        </div>

        {/* User Info */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="flex items-center gap-3 text-gray-700">
            <User size={18} />
            <span>{user.name}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Mail size={18} />
            <span>{user.email}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Shield size={18} />
            <span>{user.role}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Calendar size={18} />
            <span>
              Joined {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="mt-8 flex gap-4">

          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
            Edit Profile
          </button>

          <button className="border px-6 py-2 rounded-lg hover:bg-gray-100 transition">
            Change Password
          </button>

        </div>

      </div>

    </div>
  )
}