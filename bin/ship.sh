#!/usr/bin/env sh

set -e

. ./bin/pattern/publish_pattern.sh
. ./bin/pattern/do_for_self_all_or_one.sh

ship() {
	[[ ${PATTERN} == "" ]] || make share || return
	make update || return
	make test || return
	make lint || return
	[[ ${PATTERN} == "" ]] || publish_pattern || return
	make commit || return
	make push || return
}
export -f ship

do_for_self_all_or_one ship
