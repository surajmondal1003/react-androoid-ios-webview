server "13.232.47.86", user: "ubuntu", roles: %w{app db web}, my_property: :my_value
# server "13.232.86.71", user: "ubuntu", roles: %w{app web}, other_property: :other_value
# server "db.example.com", user: "deploy", roles: %w{db}

# set :rails_env, 'production'

set :deploy_to, "/home/ubuntu/apa_2.0_react_hybrid_web"

set :branch, "development"

append :linked_files, ".env"

append :linked_dirs, "node_modules"

set :nvm_type, :user # or :system, depends on your nvm setup
set :nvm_node, 'v10.13.0'
set :nvm_map_bins, %w{node npm yarn}

set :yarn_flags, %w(--silent --no-progress)

namespace :deploy do
	task :yarn_deploy do
		on roles fetch(:yarn_roles) do
			within_fetch(:yarn_target_path, release_path) do
				execute fetch(:yarn_bin), 'build'
			end
		end
	end

	before "symlink:release", :yarn_deploy	
end