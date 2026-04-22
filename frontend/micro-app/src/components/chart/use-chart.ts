import { useTheme, alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function useChart(options?: any) {
  const theme = useTheme();

  const baseOptions = {
    // Colors
    colors: [
      theme.palette.primary.main,
      theme.palette.warning.main,
      theme.palette.info.main,
      theme.palette.error.main,
      theme.palette.success.main,
      theme.palette.secondary.main,
    ],

    // Chart
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      foreColor: theme.palette.text.disabled,
      fontFamily: theme.typography.fontFamily,
    },

    // States
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: 'darken',
          value: 0.88,
        },
      },
    },

    // Fill
    fill: {
      opacity: 1,
      gradient: {
        type: 'vertical',
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },

    // DataLabels
    dataLabels: { enabled: false },

    // Stroke
    stroke: {
      width: 3,
      curve: 'smooth',
      lineCap: 'round',
    },

    // Grid
    grid: {
      strokeDashArray: 3,
      borderColor: theme.palette.divider,
      xaxis: {
        lines: { show: false },
      },
    },

    // Xaxis
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    // Markers
    markers: {
      size: 0,
      strokeColors: theme.palette.background.paper,
    },

    // Tooltip
    tooltip: {
      theme: theme.palette.mode,
      x: { show: false },
    },

    // Legend
    legend: {
      show: true,
      fontSize: String(13),
      position: 'top',
      horizontalAlign: 'right',
      markers: { radius: 12 },
      fontWeight: 500,
      itemMargin: { horizontal: 8 },
      labels: { colors: theme.palette.text.primary },
    },

    // plotOptions
    plotOptions: {
      // Bar
      bar: {
        borderRadius: 4,
        columnWidth: '28%',
        borderRadiusApplication: 'end',
      },
      // Pie + Donut
      pie: {
        donut: {
          labels: {
            show: true,
            value: {
              offsetY: 8,
              color: theme.palette.text.primary,
              fontSize: theme.typography.h4.fontSize,
            },
            total: {
              show: true,
              label: 'Total',
              color: theme.palette.text.secondary,
              fontSize: theme.typography.subtitle2.fontSize,
            },
          },
        },
      },
      // Radialbar
      radialBar: {
        track: {
          strokeWidth: '100%',
          background: alpha(theme.palette.grey[500], 0.16),
        },
        dataLabels: {
          value: {
            offsetY: 8,
            color: theme.palette.text.primary,
            fontSize: theme.typography.h4.fontSize,
          },
          total: {
            show: true,
            label: 'Total',
            color: theme.palette.text.secondary,
            fontSize: theme.typography.subtitle2.fontSize,
          },
        },
      },
      // Radar
      radar: {
        polygons: {
          fill: { colors: ['transparent'] },
          strokeColors: theme.palette.divider,
          connectorColors: theme.palette.divider,
        },
      },
      // Polar Area
      polarArea: {
        rings: { strokeColor: theme.palette.divider },
        spokes: { connectorColor: theme.palette.divider },
      },
    },

    // Responsive
    responsive: [
      {
        // sm
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: { bar: { columnWidth: '40%' } },
        },
      },
      {
        // md
        breakpoint: theme.breakpoints.values.md,
        options: {
          plotOptions: { bar: { columnWidth: '32%' } },
        },
      },
    ],
  };

  return { ...baseOptions, ...options };
}
