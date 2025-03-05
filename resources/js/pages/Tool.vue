<template>
    <div class="nova-tw">
        <Head title="Changelog" />

        <Heading class="mb-6">{{ __("Changelog") }}</Heading>

        <!-- Year Selection Menu -->
        <div class="mb-4 flex space-x-2">
            <button
                v-for="year in availableYears"
                :key="year"
                @click="selectedYear = year"
                class="px-4 py-2 text-sm font-bold rounded transition"
                :class="{
                    'bg-blue-600 text-white': selectedYear === year,
                    'bg-gray-200 text-gray-700': selectedYear !== year,
                }"
            >
                {{ year }}
            </button>
        </div>

        <!-- Display Changelog by Selected Year -->
        <Card
            class="px-6 pt-4 pb-2 mb-4"
            v-for="changelogData in changelogDatas[selectedYear]"
            :key="changelogData.title"
        >
            <div class="float-right text-xs font-light">
                {{ changelogData.date }}
            </div>

            <h3 class="mb-3 text-base font-bold tracking-wide uppercase">
                {{ changelogData.title }}
            </h3>

            <div
                v-for="component in changelogData.components"
                :key="component.subTitle"
            >
                <p
                    class="mb-1 font-bold"
                    :class="{
                        'text-green-600': component.subTitle == 'Added',
                        'text-yellow-600': component.subTitle == 'Changed',
                        'text-red-600': component.subTitle == 'Fixed',
                    }"
                >
                    {{ component.subTitle }}
                </p>

                <ul class="mb-3 list-disc list-inside">
                    <li v-for="list in component.list" :key="list">
                        {{ list }}
                    </li>
                </ul>
            </div>
        </Card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            changelogDatas: {},
            availableYears: [],
            selectedYear: new Date().getFullYear().toString(),
        };
    },
    mounted() {
        this.fetch();
    },
    methods: {
        async fetch() {
            const response = await Nova.request().get(
                "/nova-vendor/nova-changelog/nova-changelog"
            );
            this.changelogDatas = response.data;

            // Extract available years from the API response
            this.availableYears = Object.keys(this.changelogDatas).sort(
                (a, b) => b - a
            );
            if (!this.availableYears.includes(this.selectedYear)) {
                this.selectedYear = this.availableYears[0];
            }
        },
    },
};
</script>
